
wp.blocks.registerBlockType('tst/custom-block',{
    title:'Company Contact Information',
    icon:'code-standards',
    category:'design',
    attributes:{
        companyName:{type:'string'},
        companyPhone:{type:'string'},
        companyAddress:{type:'string'},
        companyAddress2:{type:'string'},
        companyCity:{type:'string'},
        companyState:{type: 'string'},
        companyZip:{ type:'string'},
    },
    // With edit, the field that will appear in the admin is written
    edit: function (props){
        function updateCompanyName(event){props.setAttributes({companyName: event.target.value})}
        function updateCompanyPhone(event){props.setAttributes({companyPhone: event.target.value})}
        function updateCompanyAddress(event){props.setAttributes({companyAddress: event.target.value})}
        function updateCompanyAddress2(event){props.setAttributes({companyAddress2: event.target.value})}
        function updateCompanyCity(event){props.setAttributes({companyCity: event.target.value})}
        function updateCompanyState(event){props.setAttributes({companyState: event.target.value})}
        function updateCompanyZip(event){props.setAttributes({companyZip: event.target.value})}

        return /*#__PURE__*/React.createElement("div", {
            children: [/*#__PURE__*/React.createElement("div", {
                children: [/*#__PURE__*/React.createElement("label", {
                    children: "Company Name: "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyName,
                    placeholder: "company name",
                    onChange: updateCompanyName
                }), /*#__PURE__*/React.createElement("br", {})]
            }), /*#__PURE__*/React.createElement("div", {
                children: [" ", /*#__PURE__*/React.createElement("label", {
                    children: "Company Phone: "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyPhone,
                    onChange: updateCompanyPhone,
                    placeholder: "company phone"
                }), /*#__PURE__*/React.createElement("br", {})]
            }), /*#__PURE__*/React.createElement("div", {
                children: [/*#__PURE__*/React.createElement("label", {
                    children: "Company Address: "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyAddress,
                    onChange: updateCompanyAddress,
                    placeholder: "company address"
                }), /*#__PURE__*/React.createElement("br", {})]
            }), /*#__PURE__*/React.createElement("div", {
                children: [/*#__PURE__*/React.createElement("label", {
                    children: "Company Address Line 2: "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyAddress2,
                    onChange: updateCompanyAddress2,
                    placeholder: "company address line 2"
                }), /*#__PURE__*/React.createElement("br", {})]
            }), /*#__PURE__*/React.createElement("div", {
                children: [" ", /*#__PURE__*/React.createElement("label", {
                    children: "Company City:"
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyCity,
                    onChange: updateCompanyCity,
                    placeholder: "company city"
                }), /*#__PURE__*/React.createElement("br", {})]
            }), /*#__PURE__*/React.createElement("div", {
                children: [" ", /*#__PURE__*/React.createElement("label", {
                    children: "Company State: "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyState,
                    onChange: updateCompanyState,
                    placeholder: "company state"
                }), /*#__PURE__*/React.createElement("br", {})]
            }), /*#__PURE__*/React.createElement("div", {
                children: [/*#__PURE__*/React.createElement("label", {
                    children: "Company Zipcode: "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyZip,
                    onChange: updateCompanyZip,
                    placeholder: "company zipcode"
                }), /*#__PURE__*/React.createElement("br", {})]
            })]
        });
    },
    // With save, the area that will be visible to the user is written.
    save: function (props){
        return /*#__PURE__*/React.createElement("div", {
            children: [/*#__PURE__*/React.createElement("h3", {
                children: props.attributes.companyName
            }), /*#__PURE__*/React.createElement("div", {
                children: props.attributes.companyPhone
            }), /*#__PURE__*/React.createElement("span", {
                children: [" ", props.attributes.companyAddress, " "]
            }), " ", /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("span", {
                children: [" ", props.attributes.companyAddress2, " "]
            }), /*#__PURE__*/React.createElement("div", {
                children: [/*#__PURE__*/React.createElement("span", {
                    children: props.attributes.companyCity
                }), ",", /*#__PURE__*/React.createElement("span", {
                    children: props.attributes.companyState
                }), ",", /*#__PURE__*/React.createElement("span", {
                    children: props.attributes.companyZip
                })]
            })]
        });
    }
})
// the form admin before the jsx conversion
// <div>
// <div>
// <label>Company Name: </label><br/>
// <input type="text"value={props.attributes.companyName} placeholder="company name"
//        onChange={updateCompanyName}/><br/>
// </div>
// <div> <label>Company Phone: </label><br/>
//     <input type="text" value={props.attributes.companyPhone} onChange={updateCompanyPhone} placeholder="company phone" /><br/></div>
// <div><label>Company Address: </label><br/>
//     <input type="text" value={props.attributes.companyAddress} onChange={updateCompanyAddress} placeholder="company address"  /><br/></div>
// <div><label>Company Address Line 2: </label><br/>
//     <input type="text"   value={props.attributes.companyAddress2}  onChange={updateCompanyAddress2}
//            placeholder="company address line 2" /><br/></div>
// <div> <label>Company City:</label><br/>
//     <input type="text" value={props.attributes.companyCity} onChange={updateCompanyCity} placeholder="company city" /><br/></div>
// <div> <label>Company State: </label><br/>
//     <input type="text" value={props.attributes.companyState} onChange={updateCompanyState}  placeholder="company state" /><br/></div>
// <div><label>Company Zipcode: </label><br/>
//     <input type="text" value={props.attributes.companyZip} onChange={updateCompanyZip} placeholder="company zipcode"/><br/>
// </div>
// </div>