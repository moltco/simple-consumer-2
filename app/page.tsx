/** Add your relevant code here for the issue to reproduce */
import { ExportedClass, ExportedEnum, ExportedType } from "simple-package";

export default function Home() {
  const msg: ExportedType = {
    message: "I am warning you",
    severity: ExportedEnum.warning,
  };

  const importedClass = new ExportedClass(msg);
  console.log(importedClass.toExportString());

  return null;
}
