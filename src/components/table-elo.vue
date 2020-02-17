<template>
    <ul>
        <li v-repeat="items" >
            {{name}} {{city}} {{email}}
        </li>
    </ul>
</template>

<script>
export default {
    name: 'latabla',
    props: {
        items:[
            {name: {
                type: String,
                required: false,
                default: 'nombre'
            },
            city:{
                type: String,
                required: false,
                default: 'ciudad'
            },
            email:{
                type: String,
                required: false,
                default: 'correo'
            }
            }
        ]
    }
}
</script>
