# 🎨 Figma to React: Registro rápido / Fast Registration Form

Este proyecto demuestra cómo convertir un diseño hecho en Figma a un componente funcional en React utilizando herramientas gratuitas como **Vite** y el plugin de **Builder.io**.

This project demonstrates how to convert a Figma design into a functional React component using free tools like **Vite** and the **Builder.io plugin**.

---

## 🌐 Enlaces útiles / Useful Links

- 🇪🇸 [Plugin oficial de Builder.io en Figma](https://www.figma.com/community/plugin/1111421409513774172/Builder.io-%E2%80%94-Visual-Copilot)
- 🇬🇧 [Official Builder.io Plugin](https://www.figma.com/community/plugin/1111421409513774172/Builder.io-%E2%80%94-Visual-Copilot)
- 🧩 [Vite](https://vitejs.dev/)
- 🧪 [Builder.io Dev Tools (npm)](https://www.npmjs.com/package/@builder.io/dev-tools)

---

## 🚀 Pasos / Steps

### 1️⃣ Crear proyecto React con Vite / Create React project with Vite

```bash
npm create vite@latest
# Proyecto / Project: register → React + JavaScript
cd register
npm install
npm run dev
```

### 2️⃣ Exportar desde Figma / Export from Figma

1. Abre tu diseño en [Figma](https://www.figma.com/)
2. Ve a `Plugins > Builder.io — Visual Copilot`
3. Selecciona el frame
4. Haz clic en **Export to Code** / Click **Export to Code**
5. Copia el enlace `fiddle` generado / Copy the generated link

---

### 3️⃣ Importar componente con CLI / Import with Builder CLI

```bash
npx "@builder.io/dev-tools@latest" code --url "https://builder.io/fiddle/YOUR-FIDDLE-URL"
```

---

### 4️⃣ Usar en App.jsx / Use in App.jsx

```jsx
import RegisterForm from "./components/RegisterForm";

function App() {
  return (
    <div>
      <RegisterForm />
    </div>
  );
}
```

---

## ✅ Resultado / Result

- ✅ Formulario de registro funcional / Fully functional registration form
- ✅ Fiel al diseño / Pixel-perfect design
- ✅ Diseño responsive / Responsive layout

---

## ⚖️ Ventajas y limitaciones / Pros and Limitations

| ✅ Ventajas / Pros                     | ⚠️ Limitaciones / Limitations               |
|--------------------------------------|---------------------------------------------|
| Rápido y visual / Fast and visual     | No lógica / No logic included               |
| Gratuito / Free                      | Necesita refactor / Needs refactoring       |
| Fiel a Figma / Design fidelity       | No reemplaza al dev / Not a dev replacement |

---


## 📄 Licencia / License

MIT
