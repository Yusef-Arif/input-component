```jsx
{fields.map((field, index) => (
  <div key={index}>
    <Input
      type={field.type}
      text={field.label}
      name={field.name}
      onChangeHandler={onChangeHandler}
    />
    {errors[field.name] && (
      <p className="text-red-500 text-sm mt-1">
        {errors[field.name]}
      </p>
    )}
  </div>
))}
```

# 🧠 Task #4 - The Evil Manager and the Long Form

## 🎯 Objective:

Create a smart, dynamic solution for a large form (20 input fields) with validation, without writing separate code or validation for each field manually.

---

## ✅ Features Implemented:

* 📦 **Dynamic Input System**:
  All form fields are generated from a single `fields` array, each with custom attributes (name, label, type, required, etc.).

* 🧪 **Universal Validation Function**:

  * A single `validate()` function handles all validations based on each field's configuration.
  * Validation rules supported: `required`, `minLength`, `pattern`, and `min` for numbers.

* 🧼 **Reusable Input Component**:

  * Each input field is rendered via a reusable `<Input />` component to ensure consistency and reusability.

* 🚨 **Real-time Error Display**:

  * Validation errors are shown dynamically under each input field.

* 📤 **Data Preview**:

  * When the form is submitted successfully, the entered data is shown on the side in a formatted JSON view.

* 🧹 **Clear Button**:

  * A button to reset the form and start over.

---

## 🧠 How I Solved the Task:

Instead of creating 20 separate states and validations, I used an array of objects (`fields`) to define the structure and validation rules of each field. Then:

1. I used `.map()` to render all inputs dynamically.
2. I built a single `validate()` function that loops through each field and checks the rules.
3. I used one `useState` for form data, one for errors, and one to track submission status.
4. Error messages appear automatically under the corresponding input.
5. Everything is responsive using Tailwind CSS.

---

## 📁 Files Overview:

* `App.jsx`: Main logic for rendering the form, handling submission, validation, and state.
* `components/Input.jsx`: Reusable component for input fields.
* `tailwind.config.js`: Tailwind setup (add custom colors if needed).

---

## 💡 Smart Tricks Used:

* Dynamic field generation (no repetitive code)
* Validation abstraction
* Reusability via components
* Clean UX with instant error display and result preview

---


## 📌 How to Run:

```bash
npm install
npm run dev
```

---

## 📬 Contact:

Feel free to reach out if you want to collaborate or review more smart solutions!
