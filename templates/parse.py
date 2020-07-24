from jinja2 import Template
import codecs
import os

f = codecs.open('templates/index_template.html', 'r', 'utf-8')
template = Template(f.read())
carousel = {"size":3, "items": [1,2,3]}
output_html = template.render(carousel=[1,2,3])

with open("new_index.html", "w") as f:
    f.write(output_html)
