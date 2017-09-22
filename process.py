f_parents = open("parents","r")
f_toks = open("toks","r")

parents = f_parents.readlines()
toks = f_toks.readlines()

# for line in parents:
#     print(line.replace(r'\xa0', r' ').split("#"))

for line in parents:
    print(line.split(' '))

for line in toks:
    print(line.replace('\xa0', ' ').split('#*#'))