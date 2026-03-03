import quotes from './quotes.js';

document.addEventListener('DOMContentLoaded', () => {
    const quoteElement = document.getElementById('quote-text');
    const characterElement = document.getElementById('quote-character');
    const storyElement = document.getElementById('quote-story');
    const quoteContainer = document.getElementById('quote-container');
    const button = document.getElementById('new-quote-btn');

    let availableIndices = [];

    function getNextQuoteIndex() {
        if (availableIndices.length === 0) {
            // Refill and shuffle
            availableIndices = Array.from({ length: quotes.length }, (_, i) => i);
            for (let i = availableIndices.length - 1; i > 0; i--) {
                const j = Math.floor(Math.random() * (i + 1));
                [availableIndices[i], availableIndices[j]] = [availableIndices[j], availableIndices[i]];
            }
        }
        return availableIndices.pop();
    }

    function displayRandomQuote() {
        // Fade out
        quoteContainer.classList.remove('visible');

        setTimeout(() => {
            // Pick random quote
            const randomIndex = getNextQuoteIndex();
            const quote = quotes[randomIndex];

            // Format as "QUOTE"
            quoteElement.textContent = `"${quote.text}"`;

            // Format - CHARACTER NAME
            characterElement.textContent = `- ${quote.character}`;

            // Format - STORY NAME
            storyElement.textContent = `- ${quote.story}`;

            // Fade back in
            quoteContainer.classList.add('visible');
        }, 400); // Wait for the transition out
    }

    button.addEventListener('click', displayRandomQuote);

    // Initialize
    displayRandomQuote();
});
