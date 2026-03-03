# Doctor Who Daily Quote

A simple web application that displays a random quote from the Doctor Who universe every day.

## Features

- **Daily Rotation**: Fetches a new quote each day from a curated list
- **Quote Display**: Shows the quote text, character, and story
- **Responsive Design**: Works on desktop and mobile devices
- **Clean UI**: Minimalist interface with smooth transitions

## Getting Started

### Prerequisites

- A modern web browser (Chrome, Firefox, Safari, Edge, etc.)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd daily-who-quotes
   ```

2. Open `index.html` in your web browser:
   ```bash
   open index.html
   ```

## Usage

Simply open the application in your browser to view the daily quote. The quote will automatically update every day at midnight UTC.

## Development

### Adding New Quotes

To add new quotes to the application, edit the `quotes.js` file and add new objects to the `quotes` array. Each quote object should have the following properties:

- `text`: The quote text (string)
- `character`: The character who said the quote (string)
- `story`: The Doctor Who story title (string)

**Example:**
```javascript
{
  text: "We're all stories in the end. Just make it a good one, eh?",
  character: "The Eleventh Doctor",
  story: "The Big Bang"
}
```

### Running Locally

To run the application locally with a development server, you can use any static file server. Here's how to do it with Python:

```bash
# Navigate to the project directory
cd /path/to/daily-who-quotes

# Start the Python HTTP server
python3 -m http.server 8000
```

Then open [http://localhost:8000](http://localhost:8000) in your browser.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.
