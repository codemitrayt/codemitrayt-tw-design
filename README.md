<div align="center"> 
<img src="./public/codemitrayt.png" alt="logo"/>

<h1> Codemitra YT : Tailwind Component </h1>
</div>

### Circular Progress Bar

  <img src="./public/circular-progress-bar.png" alt="logo"/>

- [Component Code](https://github.com/codemitrayt/codemitrayt-tw-design/blob/main/src/components/circular-progress-bar)

```js
import CircularProgressBar from "./components/circular-progress-bar";

const App = () => {
  return (
    <CircularProgressBar
      title="@codemitrayt"
      color="#16a34a"
      percentage={50}
      className="some tw classes"
    />
  );
};
```

### Glowind Corner Hover Effect

  <img src="./public/glowing-corner-hover-effect.png" alt="logo"/>

- [Component Code](https://github.com/codemitrayt/codemitrayt-tw-design/blob/main/src/components/glowing-corner-hover-effect)

```js
import GlowingCornerHoverEffects from "./components/glowing-corner-hover-effect";

const App = () => {
  return (
    <GlowingCornerHoverEffects color="#22c55e">
      <div>Codemitra YT</div>
    </GlowingCornerHoverEffects>
  );
};
```
