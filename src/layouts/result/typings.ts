export interface LayoutsResultProps {
	message: string;
	clickSaveButton: (event: React.FormEvent) => void;
	clickOkButton: () => void;
	clickCancelButton: () => void;
	commonHandleClick: () => void;
}
