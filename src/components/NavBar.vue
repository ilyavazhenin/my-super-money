<script setup lang="ts">
    import Menubar from 'primevue/menubar';
    import { ref } from 'vue';

    const items = ref([
        { label: 'Add', icon: 'pi pi-fw pi-plus', route: '/' },
        { label: 'Overview', icon: 'pi pi-fw pi-chart-bar', route: '/overview' },
        { label: 'Settings', icon: 'pi pi-fw pi-cog', route: '/settings' },
    ]);
</script>

<template>
    <Menubar :model="items" breakpoint="1px">
        <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a :href="href" v-bind="props.action" @click="navigate" class="nav-items">
                    <span :class="item.icon" />
                    <span>{{ item.label }}</span>
                </a>
            </router-link>
        </template>
    </Menubar>
</template>

<style scoped>
    .p-menubar-root-list > .p-menubar-item > .p-menubar-item-content > .p-menubar-item-link.nav-items {
        padding: 4px;
        display: flex;
        gap: 3px;
        color: red;
    }
</style>