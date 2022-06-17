import { Component, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";
import { ChipsItem } from "./chips-item.model";

@Component({
    selector: 'select-chips',
    templateUrl: './select-chips.component.html',
    styleUrls: ['../chips.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: SelectChipsComponent
        }
    ]
}) export class SelectChipsComponent implements ControlValueAccessor {
    selectedItem: any;
    onChange = (items: ChipsItem[]) => { };

    onTouched = () => { };

    touched = false;

    disabled = false;

    writeValue(items: ChipsItem[]): void {
        this.items = items ?? [];
    }
    registerOnChange(onChange: any): void {
        this.onChange = onChange;
    }
    registerOnTouched(onTouched: any): void {
        this.onTouched = onTouched;
    }
    setDisabledState?(disabled: boolean): void {
        this.disabled = disabled;
    }

    markAsTouched() {
        if (!this.touched) {
            this.onTouched();
            this.touched = true;
        }
    }

    items: ChipsItem[] = [];
    @Input() source: any[];
    @Input() display: string;
    @Input() value: string;
    item: string;

    onClick(item: ChipsItem) {
        this.items = this.items.filter(i => i.value != item.value);
    }

    onSelectChange() {
        this.markAsTouched();
        let toAdd =  this.source.find(i => i[this.value] == this.selectedItem);
        if (!toAdd) return;
        if (this.items.findIndex(i => i.value == toAdd[this.value]) < 0) {
            this.items.push(new ChipsItem(toAdd[this.value], toAdd[this.display]));
            this.onChange(this.items);
        }
    }
}