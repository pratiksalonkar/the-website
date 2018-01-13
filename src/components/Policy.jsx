import React from 'react';

class Policy extends React.Component {
    constructor(props) {
        super(props);
        this.State = {
            
        }
    }
    render() {
        return (
            <div>
                <form>
                    <div className="row">
                        <div className="large-12 columns md-text-field with-floating-label">
                            <input type="text" id="input_1"  />
                            <label for="input_1">Floating Label Text</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-12 columns md-text-field with-floating-label">
                            <input type="password" id="input_15" required />
                            <label for="input_15">Floating Label Password</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-12 columns">
                            <div className="uitk-select md-text-field with-floating-label">
                                <input type="text" className="select-input" readonly="true" value="Select an Option" required />
                                <span className="select-arrow"></span>
                                <ul className="select-dropdown">
                                    <li className="disabled"><span>Select an Option</span></li>
                                    <li>Option 1</li>
                                    <li>Option 2</li>
                                    <li>Option 3</li>
                                </ul>
                                <label>Select Box Label</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="small-12 columns">
                            <div className="row collapse">
                                <label>Prefix Select Box</label>
                                <div className="small-3 large-2 columns md-text-field with-floating-label">
                                    <div className="uitk-select">
                                        <input type="text" className="select-input" readonly="true" value="Husker" required />
                                        <span className="select-arrow"></span>
                                        <ul className="select-dropdown">
                                            <li>Husker</li>
                                            <li>Starbuck</li>
                                            <li>Hot Dog</li>
                                            <li>Apollo</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="small-9 large-10 columns md-text-field with-floating-label">
                                    <input type="text" id="input_5" required />
                                    <label for="input_5">Enter your URL...</label>
                                </div>
                            </div>
                        </div>
                        <div className="large-12 columns">
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-6 columns md-multi-ctrl-field">
                            <label>Choose Your Favorite</label>
                            <input id="pokemonRed" name="pokemon" type="radio" value="Red" />
                            <label for="pokemonRed">Red</label>
                            <input id="pokemonBlue" name="pokemon" type="radio" value="Blue" />
                            <label for="pokemonBlue">Blue</label>
                        </div>
                        <div className="large-6 columns md-multi-ctrl-field">
                            <label>Check these out</label>
                            <input id="checkbox1" type="checkbox" />
                            <label for="checkbox1">Checkbox 1</label>
                            <input id="checkbox2" type="checkbox" />
                            <label for="checkbox2">Checkbox 2</label>
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-12 columns">
                            <div className="md-textarea-field with-floating-label">
                                <textarea type="text" id="input_6" rows="3" required></textarea>
                                <label for="input_6">Standard Textarea Field</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-12 columns">
                            <div className="md-textarea-field with-floating-label md-textarea--autoresize">
                                <textarea data-autoresize="" rows="1" type="text" id="input_7" required></textarea>
                                <label for="input_7">Multi-line Expanding Text Field</label>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Policy;