# React Calculator

A basic calculator created using React. 

You can check a it live yourself over [here](https://ipasechnikov.github.io/react-calculator).

It's fairly a simple calculatorm, no FTM (Finite State Machine) used. All calculation logic is located in [CalculatorService.ts](https://github.com/ipasechnikov/react-calculator/blob/main/src/services/CalculatorService.ts) and tests for it in [CalculatorService.test.ts](https://github.com/ipasechnikov/react-calculator/blob/main/src/services/CalculatorService.test.ts)

Only essential features are implemented:
- Basic math operations
- Percentage calculation
- Sign inversion
- Decimal point
- Clear

This calculator doesn't support consecutive operations in order to keep the logic simple. As a result of this you should always press `=` if you want to perform calculation.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

## Built With

- [Font Awesome](https://fontawesome.com/v5/docs/web/use-with/react/)
- [big.js](https://github.com/MikeMcl/big.js/)

## Contributing

Feel free to report any bugs, issues or create a pull request.

## License
This project is licensed under [Unlicense License](https://unlicense.org/) - see the [LICENSE](LICENSE) file for details.
