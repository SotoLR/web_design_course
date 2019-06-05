opts=["January",
"February",
"March",
"April",
"May",
"June",
"July",
"August",
"September",
"October",
"Novemeber",
"December"]

for i in opts:
	print(f'<option value="{i.lower()}">{i}</option>')