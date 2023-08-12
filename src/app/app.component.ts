import {
    Component
} from '@angular/core'

import { MatSlideToggleChange } from '@angular/material/slide-toggle'

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: [
        './app.component.sass'
    ]
})
export class AppComponent {
    rowHeight!: string
    shouldSpan = true

    constructor() {
        this.handleClick()
    }

    handleToggleChange() {
        this.shouldSpan = !this.shouldSpan
    }

    handleSubmit(e: Event) {
        e.preventDefault()
        
        const formElem = e.currentTarget as HTMLFormElement
        const rowheightValue = formElem['rowheight'].value

        this.rowHeight = rowheightValue
    }

    handleClick() {
        this.rowHeight = '20.5'
        this.handleToggleChange()
    }
}