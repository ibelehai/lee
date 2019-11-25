export interface IDimension {
    width : number;
    height: number;
}

export class CommonUtils {
    public static getElementDimensions(element: HTMLElement): IDimension {
        const rect = element.getBoundingClientRect();
        return {
            width : rect.width,
            height: rect.height
        };
    }


    public static decreaseValueToLimit(value: number, limit: number): number {
        return value > limit ? --value: 0;
    }

    public static increaseValueToLimit(value: number, limit: number): number {
        return value === limit ? value : ++value;
    }
}
