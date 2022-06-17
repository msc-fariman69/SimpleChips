import { Component, Input } from "@angular/core";
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from "@angular/forms";

@Component({
    selector: 'input-chips',
    templateUrl: './input-chips.component.html',
    styleUrls: ['../chips.component.css'],
    providers: [
        {
            provide: NG_VALUE_ACCESSOR,
            multi: true,
            useExisting: InputChipsComponent
        }
    ]
}) export class InputChipsComponent implements ControlValueAccessor {
    onChange = (items: string[]) => { };

    onTouched = () => { };

    touched = false;

    disabled = false;
    writeValue(items: string[]): void {
        this.items = items ?? [];
    }
    registerOnChange(onChange: any): void {
        this.onChange = onChange;
    }
    registerOnTouched(onTouch: any): void {
        this.onTouched = onTouch;
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

    items: string[] = [];
    @Input() placeholder: string = '';
    item: string;
    onKeyPress(e: { keyCode: number }) {
        this.markAsTouched();
        if (e.keyCode == 13) {
            try {
                if (!this.item) return;
                var toAdd = this.item.split(' ');
                toAdd.filter(entry => this.items.findIndex(i => i === entry) < 0).forEach(entry => {
                    this.items.push(entry);
                    this.onChange(this.items);
                });
            }
            finally {
                this.item = null;
            }
        }
    }

    onClick(item: string) {
        this.items = this.items.filter(i => i !== item);
    }
}