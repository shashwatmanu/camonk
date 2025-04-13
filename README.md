# Sentence Construction App

This web app is designed to help users practice and improve their sentence construction skills. It presents users with prompts where they must fill in the blanks or rearrange words to form grammatically correct sentences. The app then evaluates their answers, providing feedback on correctness and areas of improvement.

## Features

- **Fill in the Blanks**: Users are given sentences with missing words, and they must fill in the blanks correctly.
- **Sentence Evaluation**: After completing a sentence, the app compares the user's response with the correct answer and provides feedback.
- **Progress Tracking**: The app tracks the user's performance and displays their overall score.
- **Detailed Feedback**: After each answer, the app displays detailed feedback about the correctness of the response.

## Setup Instructions

### Prerequisites

- Node.js (v14+)
- npm (Node Package Manager)

### Installation

1. Clone the repository:
   ```bash
      git clone https://github.com/your-username/sentence-construction-app.git
   ```
2. Navigate to the project directory:

```bash
cd sentence-construction-app
```

3. Install the dependencies:

```bash
npm install
```

4. Start the JSON Server: The app requires a mock API to be running during development. To start the JSON Server, run:

```bash
npx json-server --watch db.json --port 3001
```

5. Start the Development Server: After the JSON Server is running, start the React development server:

```bash
npm run dev
```

6. Open your browser and go to http://localhost:5173 to view the app.
