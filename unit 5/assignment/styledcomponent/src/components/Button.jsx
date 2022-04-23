import styled from 'styled-components'

const Button=styled.button`
background-color:${(props)=>
props.variant==="primary"?"blue":props.variant==="default"?"white":props.variant==="dashed"?"white":""};
padding:8px;
background:${(props)=>props.variant==="text"?"transparent":props.variant==="link"?"transparent":""};
outline:none;
margin-left:10px;
border:${(props)=>props.variant==="primary"?"1px solid black"
:props.variant==="default"?"1px solid black":props.variant==="dashed"?"1px dashed black":"none"};
color:${(props)=>props.variant==="primary"?"white":props.variant==="link"?"blue":"black"};
`
export {Button};

