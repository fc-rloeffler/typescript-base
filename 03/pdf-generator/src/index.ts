import { print } from "./common/printer";

const providedData: dataFormat = {
  test: "tester",
  lore: "bob",
  data: {
    lore: "baum",
    ipsum: "lore",
    test: "test",
  },
};

type dataFormat = {
  test: string;
  lore: string;
  data: {
    lore: string;
    ipsum: string;
    test: string;
  };
};
const text: string = JSON.stringify(providedData, null, 2);

print(text);
console.log("PDF generated!");
