import xml.etree.ElementTree
import numpy as np
import itertools
from bs4 import BeautifulSoup, NavigableString

def my_sample(filename, nsample):
    e = xml.etree.ElementTree.parse(filename)
    root = e.getroot()
    data = []

    for entity in root:
        if(entity.tag != "entity"):
            label = -1
        else:
            label = entity.attrib['id']
        for doc in entity:
            #pint(doc.tag,doc.attrib)
            data = data + [[doc.tag+doc.attrib['rank'],label]]

    comb = itertools.combinations(data,2)
    data_new = np.array([ [e[0][0],e[1][0],1] if e[0][1] == e[1][1] else [e[0][0],e[1][0],0] for e in comb ])
    positive_data = data_new[data_new[:,2] == '1']
    negative_data = data_new[data_new[:,2] == '0']
    if positive_data.shape[0] <= nsample or negative_data.shape[0] <= nsample:
        return []
    sample_p = positive_data[np.random.randint(positive_data.shape[0], size=nsample), :]
    sample_n = negative_data[np.random.randint(negative_data.shape[0], size=nsample), :]

    return np.concatenate((sample_p,sample_n),axis=0)


def file2soup(filename):
    with open(filename, "rb") as f:
        lines = f.readlines()
        lines = [line.strip() for line in lines]
        web = b''.join(lines)

    soup = BeautifulSoup(web, "html.parser")
    for script in soup(["script", "style"]):  # remove all javascript and stylesheet code
        script.extract()
    return(soup)

def traverse(node, depth, max_depth, f_toks, f_parents, ind, parent):
    if depth> max_depth:
        return(ind)

    f_parents.write(str(parent) + ' ')
    f_toks.write(node.get_text() + '#*#')
    ind = ind + 1
    parent = ind

    if depth < max_depth:
        for sub_node in node.children:
            if isinstance(sub_node,NavigableString) == False:
                if len(sub_node.get_text())>0:
                    ind = traverse(sub_node, depth+1, max_depth,  f_toks, f_parents, ind, parent)
            else:
                f_parents.write(str(parent) + ' ')
                f_toks.write(sub_node.string + '#*#')
                ind = ind + 1
    if depth == 1:
        f_parents.write("\n")
        f_toks.write("\n")
    return(ind)

def recover_filename(entity_name,file_no):
    file_no = file_no.replace('doc', '')
    file_no = '0'*(3-len(file_no)) + file_no
    filename = 'web_pages\\' + entity_name + '\\raw\\' + file_no + '\\index.html'
    return(filename)