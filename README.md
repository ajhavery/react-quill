# React Quill rich text editor

# Packages to be installed

1. npm install -D tailwindcss postcss autoprefixer
2. npx tailwindcss init -p
3. yarn add react-quill

# Quill toolbar options

| Type   | Option                                                                             |
| ------ | ---------------------------------------------------------------------------------- |
| Inline | font, size, background, color, bold, italic, script, strike, underline, link, code |
| Block  | header, list, blockquote, direction, indent, align, codeblock                      |
| Embed  | image, video                                                                       |

# Additional toolbar module options for basic

```jsx
const modules = {
  toolbar: [
    [{ font: [] }],
    [{ header: [1, 2, 3, 4, 5, 6, false] }],
    ['bold', 'italic', 'underline', 'strike'],
    [{ color: [] }, { background: [] }],
    [{ script: 'sub' }, { script: 'super' }],
    ['blockquote', 'code-block'],
    [{ list: 'ordered' }, { list: 'bullet' }],
    [{ indent: '-1' }, { indent: '+1' }, { align: [] }],
    ['link', 'image', 'video'],
    ['clean'],
  ],
};
```

# Final Output demo:

<img width="563" alt="image" src="https://user-images.githubusercontent.com/1153078/185748911-a4fe7a8b-2c69-4ce7-b459-8020a00d0f82.png">
