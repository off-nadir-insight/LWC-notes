import { LightningElement, api } from 'lwc';
export default class MyLWC extends LightningElement {
	@api textBox = "Hello, World!?";
	@api boldText = false;
	@api textColor = "Blue";
	@api borderWidth = 0;
	@api myStyle = "";
	@api text1 = "a";
	@api text2 = "b";
	@api combinedText;

    get combinedText() {
        return `${this.text1} ${this.text2}`;
    }
    get combinedStyle() {
        let returnString = "";
        if (this.boldText == true) {
            returnString += 'font-weight: bold;'
        }
        if (this.textColor) {
            returnString += `color:${this.textColor};`
        }
        if (this.borderWidth) {
            returnString += `border:${this.borderWidth}px solid black;`
        }
        return returnString;
    }
}
