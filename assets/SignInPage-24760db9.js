import{r as p,j as s,s as c,a as f,L as g,l as x}from"./index-3d6879f2.js";import{W as h}from"./WelcomeLayout-d3857a7e.js";import{c as j,a,F as v,b,d as m,E as d}from"./index.esm-afeac8ca.js";import"./hoist-non-react-statics.cjs-49d8c031.js";const w="_container_1ifid_1",N="_signin_part_1ifid_3",k="_text_box_1ifid_11",$="_signin_title_1ifid_15",S="_signin_text_1ifid_22",y="_signin_form_1ifid_27",F="_signup_option_1ifid_30",I="_signup_link_1ifid_36",t={"custom-select-container":"_custom-select-container_1ifid_1","custom-select-second-container":"_custom-select-second-container_1ifid_1","custom-select__control":"_custom-select__control_1ifid_1","custom-select-second__control":"_custom-select-second__control_1ifid_1","custom-select__control--menu-is-open":"_custom-select__control--menu-is-open_1ifid_1","custom-select-second__control--menu-is-open":"_custom-select-second__control--menu-is-open_1ifid_1","custom-select__input-container":"_custom-select__input-container_1ifid_1","custom-select-second__input-container":"_custom-select-second__input-container_1ifid_1","custom-select__value-container":"_custom-select__value-container_1ifid_1","custom-select-second__value-container":"_custom-select-second__value-container_1ifid_1","custom-select__indicator-separator":"_custom-select__indicator-separator_1ifid_1","custom-select-second__indicator-separator":"_custom-select-second__indicator-separator_1ifid_1","custom-select__indicators":"_custom-select__indicators_1ifid_1","custom-select-second__indicators":"_custom-select-second__indicators_1ifid_1","custom-select__indicator":"_custom-select__indicator_1ifid_1","custom-select-second__indicator":"_custom-select-second__indicator_1ifid_1","custom-select__single-value":"_custom-select__single-value_1ifid_1","custom-select-second__single-value":"_custom-select-second__single-value_1ifid_1","custom-select__menu":"_custom-select__menu_1ifid_1","custom-select-second__menu":"_custom-select-second__menu_1ifid_1","custom-select__option":"_custom-select__option_1ifid_1","custom-select-second__option":"_custom-select-second__option_1ifid_1","custom-select__option--is-focused":"_custom-select__option--is-focused_1ifid_1","custom-select-second__option--is-focused":"_custom-select-second__option--is-focused_1ifid_1","custom-select__option--is-selected":"_custom-select__option--is-selected_1ifid_1","custom-select-second__option--is-selected":"_custom-select-second__option--is-selected_1ifid_1","custom-select__menu-list":"_custom-select__menu-list_1ifid_1","custom-select-second__menu-list":"_custom-select-second__menu-list_1ifid_1",container:w,signin_part:N,text_box:k,signin_title:$,signin_text:S,signin_form:y,signup_option:F,signup_link:I},E="_container_otgo5_1",P="_form_otgo5_3",q="_inputs_otgo5_7",C="_form_input_otgo5_12",D="_error_input_otgo5_28",L="_success_input_otgo5_31",W="_input_pass_field_otgo5_34",z="_icon_eye_otgo5_38",A="_form_btn_otgo5_43",V="_icon_checkbox_error_otgo5_60",Z="_icon_checkbox_succsess_otgo5_65",M="_error_row_otgo5_70",R="_success_row_otgo5_79",e={"custom-select-container":"_custom-select-container_otgo5_1","custom-select-second-container":"_custom-select-second-container_otgo5_1","custom-select__control":"_custom-select__control_otgo5_1","custom-select-second__control":"_custom-select-second__control_otgo5_1","custom-select__control--menu-is-open":"_custom-select__control--menu-is-open_otgo5_1","custom-select-second__control--menu-is-open":"_custom-select-second__control--menu-is-open_otgo5_1","custom-select__input-container":"_custom-select__input-container_otgo5_1","custom-select-second__input-container":"_custom-select-second__input-container_otgo5_1","custom-select__value-container":"_custom-select__value-container_otgo5_1","custom-select-second__value-container":"_custom-select-second__value-container_otgo5_1","custom-select__indicator-separator":"_custom-select__indicator-separator_otgo5_1","custom-select-second__indicator-separator":"_custom-select-second__indicator-separator_otgo5_1","custom-select__indicators":"_custom-select__indicators_otgo5_1","custom-select-second__indicators":"_custom-select-second__indicators_otgo5_1","custom-select__indicator":"_custom-select__indicator_otgo5_1","custom-select-second__indicator":"_custom-select-second__indicator_otgo5_1","custom-select__single-value":"_custom-select__single-value_otgo5_1","custom-select-second__single-value":"_custom-select-second__single-value_otgo5_1","custom-select__menu":"_custom-select__menu_otgo5_1","custom-select-second__menu":"_custom-select-second__menu_otgo5_1","custom-select__option":"_custom-select__option_otgo5_1","custom-select-second__option":"_custom-select-second__option_otgo5_1","custom-select__option--is-focused":"_custom-select__option--is-focused_otgo5_1","custom-select-second__option--is-focused":"_custom-select-second__option--is-focused_otgo5_1","custom-select__option--is-selected":"_custom-select__option--is-selected_otgo5_1","custom-select-second__option--is-selected":"_custom-select-second__option--is-selected_otgo5_1","custom-select__menu-list":"_custom-select__menu-list_otgo5_1","custom-select-second__menu-list":"_custom-select-second__menu-list_otgo5_1",container:E,form:P,inputs:q,form_input:C,error_input:D,success_input:L,input_pass_field:W,icon_eye:z,form_btn:A,icon_checkbox_error:V,icon_checkbox_succsess:Z,error_row:M,success_row:R},T={email:"",password:""},U=j().shape({email:a().matches(/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/,"Is not in correct format").required("Email is required"),password:a().required("Password is required").min(6,"Password is too short - should be 6 chars minimum")}),B=({onSubmit:i})=>{const[_,l]=p.useState(!1);return s.jsx(v,{initialValues:T,validationSchema:U,onSubmit:(r,{resetForm:o})=>{i(r),o()},children:r=>{const{errors:o,touched:n,values:u}=r;return s.jsx(s.Fragment,{children:s.jsxs(b,{className:e.form,children:[s.jsxs("div",{className:e.inputs,children:[s.jsxs("div",{className:"form-row",children:[s.jsx("label",{htmlFor:"email"}),s.jsx(m,{type:"email",name:"email",id:"email",autoComplete:"off",placeholder:"Email",className:o.email?`${e.form_input} ${e.error_input}`:n.email?`${e.form_input} ${e.success_input}`:`${e.form_input}`}),o.email&&n.email?s.jsxs("div",{className:e.error_row,children:[s.jsx("svg",{className:e.icon_checkbox_error,children:s.jsx("use",{href:`${c}#checkbox-circle`})}),s.jsx(d,{name:"email"})]}):null,!o.email&&u.email?s.jsxs("div",{className:e.success_row,children:[s.jsx("svg",{className:e.icon_checkbox_succsess,children:s.jsx("use",{href:`${c}#checkbox-circle`})}),s.jsx("p",{children:"Success email"})]}):null]}),s.jsxs("div",{className:"form-row",children:[s.jsx("label",{htmlFor:"password"}),s.jsxs("div",{className:e.input_pass_field,children:[s.jsx(m,{type:_?"text":"password",name:"password",id:"password",autoComplete:"off",placeholder:"Password",className:o.password?`${e.form_input} ${e.error_input}`:n.password?`${e.form_input} ${e.success_input}`:`${e.form_input}`}),s.jsx("svg",{className:e.icon_eye,onClick:()=>l(!_),children:_?s.jsx("use",{href:`${c}#eye`}):s.jsx("use",{href:`${c}#eye-off`})})]}),o.password&&n.password?s.jsxs("div",{className:e.error_row,children:[s.jsx("svg",{className:e.icon_checkbox_error,children:s.jsx("use",{href:`${c}#checkbox-circle`})}),s.jsx(d,{name:"password"})]}):null,!o.password&&u.password?s.jsxs("div",{className:e.success_row,children:[s.jsx("svg",{className:e.icon_checkbox_succsess,children:s.jsx("use",{href:`${c}#checkbox-circle`})}),s.jsx("p",{children:"Success password"})]}):null]})]}),s.jsx("button",{type:"submit",className:e.form_btn,children:"Sign In"})]})})}})},O=()=>{const i=f(),_=l=>{i(x(l))};return s.jsx(h,{children:s.jsxs("div",{className:t.signin_part,children:[s.jsxs("div",{className:t.text_box,children:[s.jsx("h2",{className:t.signin_title,children:"Sign In"}),s.jsx("p",{className:t.signin_text,children:"Welcome! Please enter your credentials to login to the platform:"})]}),s.jsx(B,{onSubmit:_}),s.jsxs("p",{className:t.signup_option,children:["Don’t have an account?",s.jsx("span",{children:s.jsx(g,{className:t.signup_link,to:"/signup",children:"Sign Up"})})]})]})})};export{O as default};
