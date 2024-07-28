<h1 align="center">Coffee App</h1>

![Capa](https://github.com/user-attachments/assets/d0c06e10-f221-4ee2-bea0-225e267666f5)

The Coffee App is a simple coffee listing application created using the concepts of Clean Code, SOLID Principles, Factory Design Pattern, and Triple A (Arrange, Act, Assert) for the implementation of unit and integration tests.

## Functionalities

The application should fetch coffee data from an API and display a skeleton while the data is loading. On success, it should show a screen with the list of coffees. In case of an error, it should display an error screen. Additionally, the application should allow real-time filtering of the coffees based on the user's search input and include a button to refetch the data, allowing the user to fetch the coffee data again if desired.

## The app screens

![Frame 48095509](https://github.com/user-attachments/assets/871dc8a6-00c7-4938-af18-75e35800da19)

# About the design

- Changed the color and redesigned the components to provide an attractive and intuitive design;
- Maintained the standards of 16px padding on the page and the refresh button uses 32px horizontal padding;

## Estrutura do app e desenvolvimento

The application is developed using SOLID principles, where components are separated to have single responsibilities (Single Responsibility Principle), which is represented in all components. Additionally, large components are divided into smaller, more specific ones, as can be clearly seen in the component HomeContent.tsx (following the Interface Segregation Principle). I also separated some rules into helpers and hooks to keep the code clean and independent (Dependency Inversion Principle). Furthermore, I did not force components to depend on interfaces they do not use, following the Interface Segregation Principle.

### api

For the API structure, I separated the code into services to facilitate maintenance and ensure single responsibilities. I also divided the code into "scopes" and used the Factory Design Pattern to ease changes in case the consumed API is modified. For security and ease of change, I also added the BASE_URL in the .env file.

I chose to use the Axios library for easy API connection and the React Query library (now called Tanstack) for easy API consumption and cache control, one of the most interesting features of this tool. In the useListCoffees hook, I added a select parameter, which keeps the cached data on the app screen when a refetch is performed and only updates it if there are changes after making the GET request. This way, the user experiences a smooth application flow and avoids unnecessary loading.

### ui

As requested in the challenge, I added the NativeBase library. Since its implementation with Expo SDK 51 is deprecated, it was a bit difficult due to incompatibilities, but after some research, it was simple to implement. I used the components as per the documentation and added a custom theme with the colors I decided to use.

For organization, it's important to note that I separated the Providers into a single component, as I used two libraries that require providers, keeping the configuration in one place.

### tests

For all components and helpers, I applied unit tests, and for the screen, I created an integration test. For organization, I separated all of them into the "tests" folder and used the Jest.js library to develop them, following the Triple A pattern (Arrange, Act, Assert).

The test coverage for components, screens, and helpers is 100%, maintaining the quality of the tests.

**components**
<img width="1411" alt="Captura de Tela 2024-07-27 às 19 06 38" src="https://github.com/user-attachments/assets/5015070b-2583-47ba-8f1a-00362937a6ae">

**helpers**
<img width="1405" alt="Captura de Tela 2024-07-27 às 19 06 47" src="https://github.com/user-attachments/assets/492cd963-270d-4659-bd97-f5af15423733">

**screens**
<img width="1412" alt="Captura de Tela 2024-07-27 às 19 06 58" src="https://github.com/user-attachments/assets/a91ad9e9-8687-4fae-8cff-95a94d9ae932">


## 🛠 Technologies used

For the development of this website, I used the following technologies:

- Visual Studio Code;
- JavaScript
- Typescript
- Native Base
- React-Query
- Jest.js
- Expo
- Axios

## 🚀 How to test the application

```bash
# Clone repository
git clone https://github.com/JoyceQuerubino/coffee-app

# Install the dependencies
npm install

# Run the script
npx expo start
# O projeto inciará através do Expo em uma nova aba, e um QR Code estará disponível.

------------------------------------------------------------------
download aplication
- Donwload app 'Expo Go' in your phone
- click 'Scan QR Code' To scan the code below
- Or copy and paste the link below:: exp://exp.host/@joycequerubino/base-desafio-superlogica
```

![image](https://user-images.githubusercontent.com/66806696/134555976-8dcdaa2f-aec7-4551-986d-d6264fe03345.png)

---

<p align= center>
Developed by <strong>Joyce Querubino</strong>   -----   add me on <a href="https://www.linkedin.com/in/joyce-querubino/"target="_blank">Linkedin</a>
</p>
