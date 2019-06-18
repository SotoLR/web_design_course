pages=[
	"home",
	"homepage",
	"main"
	]

styledir = "styles"

with open("make.sh", "w") as file:
	file.write(f"#!/bin/bash\n")
	for p in pages:
		file.write(f"sass {styledir}/{p}_styler.scss:{styledir}/{p}_style.css\n")

#sass styles/main_styler.scss:styles/main_style.css