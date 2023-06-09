<h1>Weather Web App</h1>

This is a simple web app that allows you to search for weather information by location. It uses the [Position Stack API](https://positionstack.com/) to convert location names into latitude and longitude coordinates, and the [Weatherstack API](https://weatherstack.com/) to retrieve weather information for those coordinates.

## Getting Started

To use this app, you will need to obtain API keys from Positionstack and Weatherstack. Once you have those, you can create a `.env` file in the root directory of the project and add the following variables:

```html
    POSITION_API_KEY=<your_position_api_key_here>
    WEATHERSTACK_API_KEY=<your_weatherstack_api_key_here>
```
Then, you can install the dependencies using `npm install` and start the app with `npm run start`.

## Technologies Used

- Node.js
- Express

This web application was built using Node.js and the Express framework. Node.js is a powerful JavaScript runtime that allows developers to build scalable and high-performance applications. Express is a popular web application framework for Node.js that simplifies the process of building web applications by providing a set of useful features and utilities.

## Contributing

- This app is not yet responsive, so we would appreciate any contributions that improve its responsiveness.
- We welcome any suggestions for new features or improvements to existing ones.
- Any contributions that improve the UI of the app are highly appreciated.
- If you find any bugs or issues, please report them in the Issues section.
- We will continue to develop and improve the app over time.

## How to Contribute

If you're interested in contributing to this project, we encourage you to read the detailed instructions on how to contribute in the CONTRIBUTING.md file. It provides more information on how to report issues, make feature requests, and submit pull requests. We welcome your contributions and appreciate your help in making this project even better!

## Usage

When you open the app, you will see a search form where you can enter a location name (e.g., "New York City") and submit the form to retrieve weather information for that location. If the location is found, you will see the current temperature, weather description, and other information displayed on the page.


## License

This project is licensed under the MIT License - see the [LICENSE](./LICENSE) file for details.