import ColorCircleSVG from "../../Icons/ColorCircleSVG";
import styles from "./ProductColors.module.css";

function ProductColors({ colors, selectedColor, onClick }) {
  const [selectedColorHex, _] = selectedColor.split("%");

  return (
    <div className={styles.colors}>
      <p>Select Color</p>
      <ul className={styles.colors_list}>
        {colors.map(({ color_hex, color_name }) => (
          <li
            key={color_hex}
            className={selectedColorHex === color_hex ? styles.selected : ""}
            onClick={() => onClick("color", `${color_hex}%${color_name}`)}
          >
            <ColorCircleSVG color_hex={color_hex} isSelected={selectedColorHex === color_hex} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ProductColors;
