# Adaptive Multi-Step Form

This project consists of a multi-step form that adapts itself by reading a structure file with all the information.

## Form Json File Structure

- form

  - id - The unique identifier of the form (Required)
  - title - The title for the form (Required)
  - description - The description for the form (Optional)
  - groups - Array of object type "group" (Required)
  - outro - Object of type "outro"

- group

  - id - The unique identifier of the form (Required)
  - title - The title of the group (Required)
  - description - The description of the group (Optional)
  - questions - Array of object type "question"

- question

  - id - The unique identifier of the question (Required)
  - title - The title of the question (Required)
  - description - The description of the question (Optional)
  - type - One of the questions types allowed in string form (Required)

- Question Types Allowed
  - text - For all questions that need a text spelling answer
  - number - For all questions that need a number input
  - date - For all questions that need a date type of input
  - boolean - For all questions that need a "yes" or "no" answer

### Json Example

```json
{
  "form": {
    "id": 1,
    "title": "Personal Info",
    "description": "( This is form was created to gather basic personal info )",
    "groups": [
      {
        "id": 1,
        "title": "Basic Info",
        "description": "( Please answer the questions bellow )",
        "questions": [
          {
            "id": 1,
            "title": "What is your first name?",
            "description": "(Please enter only your first name)",
            "type": "text"
          },
          { "id": 2, "title": "When were you born?", "type": "date" }
        ]
      },
      {
        "id": 2,
        "title": "Users Family Situation",
        "description": "( Please answer the questions bellow about your family situation )",
        "questions": [
          {
            "id": 3,
            "title": "Do you live with your family?",
            "description": "( Select the proper answer )",
            "type": "boolean"
          },
          {
            "id": 4,
            "title": "With how many family members do you live with?",
            "type": "number"
          }
        ]
      }
    ],
    "outro": {
      "title": "Thank you for completing the form!",
      "description": "Please press submit, to submit your answers!"
    }
  }
}
```

## UI Images

<img width="1716" alt="Screenshot 2022-12-21 at 00 34 00" src="https://user-images.githubusercontent.com/47696178/208800682-aaf24150-f151-4b37-912f-a4f48f6a7728.png">
<img width="1728" alt="Screenshot 2022-12-21 at 00 34 20" src="https://user-images.githubusercontent.com/47696178/208800700-c5814dac-b785-469f-95ee-9326d7fe582b.png">
<img width="1728" alt="Screenshot 2022-12-21 at 00 34 35" src="https://user-images.githubusercontent.com/47696178/208800716-19f546bf-5f38-46e3-a09b-d09b24d947c8.png">
<img width="1728" alt="Screenshot 2022-12-21 at 00 43 47" src="https://user-images.githubusercontent.com/47696178/208800829-f838c4a9-e107-462d-9a92-d33c240a452e.png">




## How to run this project

```bash
 git clone "project link"

 cd adaptive-multistep-form-react

 npm install

 npm run dev
```

## Technologies

- Javascript
- VsCode
- Html
- CSS
- React
- JSX
- Json
- Custom Hooks
- Styled-Components
- React Context
- React PropTypes

## Collaborators

[Mario Vieira](https://github.com/MarioWork)
