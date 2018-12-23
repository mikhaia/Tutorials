# Tutorials

# How to work with form components

Base syntaxis:
```HTML
<div class="form-group">
    <label class="font-bold" for="input-id">Label value:</label>
    <br>
    <input type="text" id="input-id" value="">
</div>
```

Disable input:
```HTML
...
<input type="text" id="input-id" value="" disable>
...
```

Link after label:
```HTML
...
    <label class="font-bold" for="input-id">Label value:</label>
    <a class="edit-link">Edit</a>
...
```

Add notes after input:
```HTML
...
<input type="text" id="input-id" value="">
<span class="input-help">Note: Any your notw.</span>
...
```

Invalid input:
```HTML
...
<input type="text" id="input-id" value="">
<span class="input-invalid-x">X</span>
<span class="input-invalid">Validation Error Description</span>
...
```
**Impotant: ".input-invalid" elemetns must be placed immediately after input-tag**
