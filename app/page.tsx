/** Add your relevant code here for the issue to reproduce */
import { ExportedClass, ExportedEnum, ExportedType } from "simple-package";

export default function Home() {
  const msg: ExportedType = {
    message: "I am warning you",
    severity: ExportedEnum.warning,
  };

  const importedClass = new ExportedClass(msg);
  const output =
    importedClass.toExportString() + Math.floor(Math.random() * 100).toString();

  console.log(output);

  return output;
}
