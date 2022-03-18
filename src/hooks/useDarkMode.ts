import { ref } from "vue";
let isFirst = true;
function getLocalMode() {
  const mode = localStorage.getItem("mode");
  return mode ? mode : "auto";
}
function changeClass(mode: string) {
  const html = document.querySelector("html");

  if (mode === "dark") {
    html?.classList.add("dark");
  } else {
    html?.classList.remove("dark");
  }
}
const mode = ref(getLocalMode());
export function useDarkMode() {
  if (isFirst) {
    isFirst = false;
  } else {
    mode.value = mode.value === "auto" ? "dark" : "auto";
  }
  localStorage.setItem("mode", mode.value);
  changeClass(mode.value);
  return mode;
}
