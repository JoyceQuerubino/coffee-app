import "@testing-library/react-native/extend-expect";
import { screen } from "@testing-library/react-native";
import { renderWithProvider } from "@tests/config/renderWithProvider";
import { EmptyComponent } from "@components/EmptyComponent";
import React from "react";
import { testID } from "@tests/constants/testId";

describe("EmptyComponent", () => {
  it("should render the component with title and image", () => {
    const mockImage = require("@assets/placeholder-image.png");

    renderWithProvider(
      <EmptyComponent title="No Items Found" image={mockImage} />
    );

    const image = screen.getByTestId(testID.empty_image);
    expect(image.props.source).toEqual(mockImage);

    const heading = screen.queryByText("No Items Found");
    expect(heading).toBeTruthy();
  });

  it("should render with default image when no image is provided", () => {
    renderWithProvider(
      <EmptyComponent title="No Items Found" image={undefined} />
    );

    const image = screen.getByTestId(testID.empty_image);
    expect(image.props.source).toBeNull();
  });
});
