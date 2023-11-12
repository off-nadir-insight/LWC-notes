import { LightningElement, api } from 'lwc';
export default class MyLWC extends LightningElement {
	@api textBox = "Hello, World!?";
    	@api happy = false;
    	@api textColor = "Blue";
}
