#nombre, apellido, promedio, carrera, semestre

from random import randint

headers = "Name,Last name,Grade,Major,Semester"
headers=headers.split(",")

print("tr")
for each in headers:
	print(f"\t<th>{each}</th>")
print("/tr")

names = ["Edsger Dijkstra",
"Ada Lovelace",
"Marvin Minsky",
"Margaret Hamilton",
"Jean-Pierre Luminet",
"Katie Bouman"]

for each in names:
	each = each.split()
	print("<tr>")
	print(f"\t<td>{each[0]}</td>")
	print(f"\t<td>{each[1]}</td>")
	print(f"\t<td>{randint(89,101)}</td>")
	print(f"\t<td>ITC</td>")
	print(f"\t<td>{randint(3,10)}</td>")
	print("</tr>")