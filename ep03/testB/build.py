import json,glob,os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
head=open('_head.html').read()
ic={os.path.basename(f)[:-4]:open(f).read() for f in glob.glob('assets/*.svg')}
js="const I=n=>window.ICONS[n]||'';\n"+open('_anim.js').read()
open('test.html','w').write(head+'\n<div id="frames"></div>\n<script>window.ICONS='+json.dumps(ic)+';\n'+js+'\n</script></body></html>')
