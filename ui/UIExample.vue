<p @click="test({'hello': 'world'})">
    This is a 3rd Party Widget
</p>
<h1>Widget ID: {{ id }}</h1>
<ul>
    <li v-for="(value, key, index) in props">
        <label>{{ key }}</label>
    </li>
</ul>