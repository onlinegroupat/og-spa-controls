import * as React from "react";
import * as moment from "moment";
import {MaterialIcon} from "../main/typescript/MaterialIcon";
import {Button} from "../main/typescript/Button";
import {TextInput} from "../main/typescript/TextInput";
import {DateInput} from "../main/typescript/DateInput";
import {NumberInput} from "../main/typescript/NumberInput";

//
// Example showing a controlled input
//
class ControlledInputExample extends React.Component<{}, { value: string }> {
    constructor(props: undefined) {
        super(props);
        this.state = {value: 'initialValue'};
    }

    private handleChange = (e: React.ChangeEvent<HTMLInputElement>) => this.setState({value: e.target.value});

    render() {
        return (
            <div>
                <TextInput className="example-text-input" label="Controlled input" value={this.state.value}
                           onChange={this.handleChange}/>
                <p>The current value is {this.state.value}</p>
            </div>
        );
    }
}

//
// Example showing a controlled input
//
class ControlledDateInputExample extends React.Component<{}, { value: moment.Moment | null, stringValue?: string }> {
    constructor(props: undefined) {
        super(props);
        this.state = {value: moment()};
    }

    private handleChange = (newValue: moment.Moment) => this.setState({value: newValue});
    private handleStringChange = (newValue: moment.Moment) => this.setState({stringValue: newValue.isValid() ? newValue.format('DD.MM.YYYY') : ''});
    render() {
        console.log('ControlledDateInputExample.render: value = ', this.state.value);

        return (
            <div>
                <div>
                    <DateInput className="example-text-input" label="stored as moment object"
                               dateValue={this.state.value}
                               format="DD.MM.YYYY"
                               acceptFormat="D.M.YYYY"
                               onDateChange={this.handleChange}/>
                    <Button onClick={e => this.setState({value: null})}>Reset</Button>
                    <span>The current value is {this.state.value ? this.state.value.format() : 'null'}</span>
                </div>
                <div>
                    <DateInput className="example-text-input" label="stored as string"
                               dateValue={this.state.stringValue ? moment(this.state.stringValue, 'DD.MM.YYYY', true) : null}
                               format="DD.MM.YYYY"
                               acceptFormat="D.M.YYYY"
                               onDateChange={this.handleStringChange}/>
                    <Button onClick={e => this.setState({stringValue: ''})}>Reset</Button>
                    <span>The current value is {this.state.stringValue || ''}</span>
                </div>
            </div>
        );
    }
}

class ControlledGermanNumberInputExample extends React.Component<{}, {value: string | null, numberValue?: number}> {
    constructor(props: undefined) {
        super(props);
        this.state = {value: ''};
    }

    private handleNumberChange = (newValue: number) => this.setState({numberValue: newValue});
    render() {
        return (
            <div>
                <div>
                    <NumberInput className ="example-text-input" label="german currency number"
                    localeFormat = {new Intl.NumberFormat('DE-de', { minimumFractionDigits: 2, maximumFractionDigits: 2})}
                    numberValue = {this.state.numberValue}
                    onNumberValueChange = {this.handleNumberChange}/>
                    <span>The current value is {this.state.numberValue}</span>
                </div>
            </div>
        );
    }
}

class ControlledEnglishNumberInputExample extends React.Component<{}, {value: string | null, numberValue?: number}> {
    constructor(props: undefined) {
        super(props);
        this.state = {value: ''};
    }

    private handleNumberChange = (newValue: number) => this.setState({numberValue: newValue});
    render() {
        return (
            <div>
                <div>
                    <NumberInput className ="example-text-input" label="english currency number"
                    localeFormat = {new Intl.NumberFormat('en-GB', { minimumFractionDigits: 2, maximumFractionDigits: 2})}
                    numberValue = {this.state.numberValue}
                    onNumberValueChange = {this.handleNumberChange}/>
                    <span>The current value is {this.state.numberValue}</span>
                </div>
            </div>
        );
    }
}

class ControlledChineseNumberInputExample extends React.Component<{}, {value: string | null, numberValue?: number}> {
    constructor(props: undefined) {
        super(props);
        this.state = {value: ''};
    }

    private handleNumberChange = (newValue: number) => this.setState({numberValue: newValue});
    render() {
        return (
            <div>
                <div>
                    <NumberInput className ="example-text-input" label="chinese currency number"
                    localeFormat = {new Intl.NumberFormat('zh-Hans-CN-u-nu-hanidec', { minimumFractionDigits: 2, maximumFractionDigits: 2})}
                    numberValue = {this.state.numberValue}
                    onNumberValueChange = {this.handleNumberChange}/>
                    <span>The current value is {this.state.numberValue}</span>
                </div>
            </div>
        );
    }
}

export const InputSection = () => (
    <section>
        <h2>input</h2>
        <form>
            <TextInput className="example-text-input" label="Default style"/>
            <TextInput className="example-text-input-custom" label="Custom focus color"/>
            <TextInput className="example-text-input" label="Requires value" required/>
            <TextInput className="example-text-input" label="Requires pattern '1234'" pattern="1234"/>
            <TextInput className="example-text-input" label="Type email" type="email"/>
            <TextInput className="example-text-input" label="Type number" type="number"/>
            <TextInput className="example-text-input" label="Min length 2" minLength={2}/>
            <ControlledInputExample />
            <ControlledDateInputExample />
            <ControlledGermanNumberInputExample />
            <ControlledEnglishNumberInputExample />
            <ControlledChineseNumberInputExample />
            <Button className="example-button" primary icon={MaterialIcon.save}>Submit</Button>
        </form>
    </section>
);