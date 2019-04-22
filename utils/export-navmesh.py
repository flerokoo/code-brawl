# USAGE
# 1 create navmesh, triangulate it (with triangulate modificator)
# 2 select created mesh in object mode
# 3 paste this to Text Editor in Blender and press "Run script"
# 4 navmesh data will be copied to clipboard

import bpy
import subprocess
import json


obj = bpy.context.active_object
polys = obj.data.polygons
verts = obj.data.vertices
scale = 100

out = []
for poly in polys:
    indices = poly.vertices    
    poly_def = []
    out.append(poly_def);
    for i in indices:
        poly_def.append({
            "x": round(verts[i].co.x * scale, 2),
            "y": round(verts[i].co.y * scale, 2)
        })          

        
out_str = json.dumps(out)
subprocess.check_call('echo {} | clip'.format(out_str), shell=True)  
print("Copied navmesh json to clipboard")      