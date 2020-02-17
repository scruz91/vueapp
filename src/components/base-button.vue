<template>
    <button >
            {{text}}
    </button>
</template>

<script>

export default {
    name: 'base-button',
    props: {
        text: {
            type: String,
            required: false,
            default: 'Enviar'
            //validator: string => string.length > 0
        }
    },
    updated(){
        alert(this.$store.state.message)
    }
}
</script>