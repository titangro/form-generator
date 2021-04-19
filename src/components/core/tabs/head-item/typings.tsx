export interface TabsHeadItemProps {
	name: string;
	handleActiveName: (name: string) => void;
	isActive?: boolean;
}
