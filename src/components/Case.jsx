import React from 'react';

class Case extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            organizationName: "",
            taxIdNumber: "",
            telephoneNumber: "",
            faxNumber: "",
            emailId: "",
            foreignAddressIndicator: "",
            extraAddress: "",
            streetPOBox: "",
            city: "",
            state: "",
            zipCode: "",
            foreignPostal: "",
            foreignStreetCity: "",
            country: "",
            stateOfOrganization: "",
            formOfOrganization: "",
            natureOfBusiness: "",
            standardIndustryCode: ""
        }

        this.handleInputChange = this.handleInputChange.bind(this);
    }

    handleInputChange(event) {
        const target = event.target;
        const value = target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;

        this.setState({
            [name]: value
        });
    }

    render() {
        var classTelephoneNumber = "md-text-field with-floating-label";
        if (this.state.telephoneNumber !== "") {
            classTelephoneNumber = "md-text-field with-floating-label optional"
        }
        var classFaxNumber = "md-text-field with-floating-label";
        if (this.state.faxNumber !== "") {
            classFaxNumber = "md-text-field with-floating-label optional"
        }
        var classEmailId = "md-text-field with-floating-label";
        if (this.state.telephoneNumber !== "") {
            classEmailId = "md-text-field with-floating-label optional"
        }
        return (
            <div>
                <form>
                    <div className="large-4 columns">
                        <div className="large-12 columns">
                            <div className="md-text-field with-floating-label">
                                <input type="text"
                                    id="organizationName"
                                    name="organizationName"
                                    value={this.state.organizationName}
                                    onChange={this.handleInputChange}
                                    required />
                                <label for="organizationName">Organization/Entity Name</label>
                            </div>
                        </div>
                        <div className="large-12 columns">
                            <div className="md-text-field with-floating-label">
                                <input type="text"
                                    id="taxIdNumber"
                                    name="taxIdNumber"
                                    value={this.state.taxIdNumber}
                                    onChange={this.handleInputChange}
                                    required />
                                <label for="taxIdNumber">TIN</label>
                            </div>
                        </div>
                        <div className="large-12 columns">
                            <div className={classTelephoneNumber}>
                                <input type="text"
                                    id="telephoneNumber"
                                    name="telephoneNumber"
                                    value={this.state.telephoneNumber}
                                    onChange={this.handleInputChange} />
                                <label for="telephoneNumber">Telephone</label>
                            </div>
                        </div>
                        <div className="large-12 columns">
                            <div className={classFaxNumber}>
                                <input type="text"
                                    id="faxNumber"
                                    name="faxNumber"
                                    value={this.state.faxNumber}
                                    onChange={this.handleInputChange} />
                                <label for="faxNumber">Fax</label>
                            </div>
                        </div>
                        <div className="large-12 columns">
                            <div className={classEmailId}>
                                <input type="text"
                                    id="emailId"
                                    name="emailId"
                                    value={this.state.emailId}
                                    onChange={this.handleInputChange} />
                                <label for="emailId">Email</label>
                            </div>
                        </div>
                    </div>
                    <div className="large-4 columns">
                        <div className="large-12 columns md-multi-ctrl-field">
                            <label>Address</label>
                            <input id="foreignAddressIndicator"
                                type="checkbox"
                                name="foreignAddressIndicator"
                                value={this.state.foreignAddressIndicator}
                                onChange={this.handleInputChange} />
                            <label for="foreignAddressIndicator">Foreign</label>
                        </div>
                        <div className="large-12 columns">
                            <div className="md-text-field with-floating-label">
                                <input type="text"
                                    id="extraAddress"
                                    name="extraAddress"
                                    value={this.state.extraAddress}
                                    onChange={this.handleInputChange}
                                    required />
                                <label for="extraAddress">Extra Address</label>
                            </div>
                        </div>
                        <div className="large-12 columns">
                            <div className="md-text-field with-floating-label">
                                <input type="text"
                                    id="streetPOBox"
                                    name="streetPOBox"
                                    value={this.state.streetPOBox}
                                    onChange={this.handleInputChange}
                                    required />
                                <label for="streetPOBox">Street/PO Box</label>
                            </div>
                        </div>
                        <div className="large-12 columns">
                            <div className="md-text-field with-floating-label">
                                <input type="text"
                                    id="city"
                                    name="city"
                                    value={this.state.city}
                                    onChange={this.handleInputChange}
                                    required />
                                <label for="city">City</label>
                            </div>
                        </div>
                        <div className="large-6 columns">
                            <div className="uitk-select md-text-field with-floating-label">
                                <select class="os-default">
                                    <option disabled selected value="">Select an Option</option>
                                    <option value="option 1">Option 1</option>
                                    <option value="option 2">Option 2</option>
                                    <option value="option 3">Option 3</option>
                                </select>
                                <span class="select-arrow"></span>
                                <label>Select Box Label</label>
                            </div>
                        </div>
                        <div className="large-6 columns">
                            <div className="md-text-field with-floating-label">
                                <input type="text"
                                    id="zipCode"
                                    name="zipCode"
                                    value={this.state.zipCode}
                                    onChange={this.handleInputChange}
                                    required />
                                <label for="zipCode">Zip Code</label>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="large-4 columns md-text-field with-floating-label">
                            <input type="text" id="input_2" required />
                            <label for="input_2">large-4.columns</label>
                        </div>
                        <div className="large-4 columns">
                            <div className="uitk-select md-text-field with-floating-label">
                                <select class="os-default">
                                    <option disabled selected value="">Select an Option</option>
                                    <option value="option 1">Option 1</option>
                                    <option value="option 2">Option 2</option>
                                    <option value="option 3">Option 3</option>
                                </select>
                                <span class="select-arrow"></span>
                                <label>Select Box Label</label>
                            </div>
                        </div>
                        <div className="large-4 columns md-text-field with-floating-label">
                            <input type="text" id="input_4" required />
                            <label for="input_4">large-4.columns</label>
                        </div>
                    </div>
                </form>
            </div>
        )
    }
}

export default Case;