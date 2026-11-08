import json,glob,os
os.chdir(os.path.dirname(os.path.abspath(__file__)))
ic={os.path.basename(f)[:-4]:open(f).read() for f in glob.glob('assets/*.svg')}
parts=[open(f).read() for f in ['lib.js','frames3.js','render.js']]
open('sb.html','w').write(open('_head.html').read()+'\n<div id="frames"></div>\n<script>window.ICONS='+json.dumps(ic)+';\n'+'\n'.join(parts)+'\n</script></body></html>')
