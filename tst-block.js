
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
    edit: function (props){
        return /*#__PURE__*/React.createElement("div", {
            children: /*#__PURE__*/React.createElement("div", {
                children: [/*#__PURE__*/React.createElement("label", {
                    children: "Company Name "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyName,
                    placeholder: "company name"
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("label", {
                    children: "Company Phone "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyPhone,
                    placeholder: "company phone"
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("label", {
                    children: "Company Address "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyAddress,
                    placeholder: "company address"
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("label", {
                    children: "Company Address Line 2 "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyAddress2,
                    placeholder: "company address line 2"
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("label", {
                    children: "Company City"
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyCity,
                    placeholder: "company city"
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("label", {
                    children: "Company State "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.companyState,
                    placeholder: "company state"
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("label", {
                    children: "Company Zipcode "
                }), /*#__PURE__*/React.createElement("br", {}), /*#__PURE__*/React.createElement("input", {
                    type: "text",
                    value: props.attributes.company,
                    placeholder: "company zipcode"
                }), /*#__PURE__*/React.createElement("br", {})]
            })
        });

    },
    save: function (props){
        return null;
    }

})