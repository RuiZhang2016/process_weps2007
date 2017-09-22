from util import traverse, my_sample, file2soup, recover_filename
import os
import numpy as np

def my_write(entity_name, samples, a_toks, a_parents, b_toks, b_parents, f_sim):
    for pair in samples:
        filename = recover_filename(entity_name,pair[0])
        soup = file2soup(filename)
        if(len([ 1 for node in soup.children])<2):
            continue
        traverse(soup, 1, 2, a_toks, a_parents, 0, 0)

        filename = recover_filename(entity_name, pair[1])
        soup = file2soup(filename)
        if (len([ 1 for node in soup.children])<2):
            continue
        traverse(soup, 1, 2, b_toks, b_parents, 0, 0)
        f_sim.write(pair[2] + "\n")

a_parents_train = open("train\\parents.a","w",encoding="utf8")
b_parents_train = open("train\\parents.b","w",encoding="utf8")
a_toks_train = open("train\\toks.a","w",encoding="utf8")
b_toks_train = open("train\\toks.b","w",encoding="utf8")
f_sim_train = open("train\\sims","w",encoding="utf8")

a_parents_dev = open("dev\\parents.a","w",encoding="utf8")
b_parents_dev = open("dev\\parents.b","w",encoding="utf8")
a_toks_dev = open("dev\\toks.a","w",encoding="utf8")
b_toks_dev = open("dev\\toks.b","w",encoding="utf8")
f_sim_dev = open("dev\\sims","w",encoding="utf8")

a_parents_test = open("test\\parents.a","w",encoding="utf8")
b_parents_test = open("test\\parents.b","w",encoding="utf8")
a_toks_test = open("test\\toks.a","w",encoding="utf8")
b_toks_test = open("test\\toks.b","w",encoding="utf8")
f_sim_test = open("test\\sims","w",encoding="utf8")

entity_name_set = os.listdir("web_pages")

for entity_name in entity_name_set:
    n = 50
    samples = my_sample('truth_files\\'+entity_name+'.clust.xml',n)
    np.random.shuffle(samples)
    train_pairs = np.concatenate((samples[0:int(0.5*n),], samples[n:n+int(0.5*n),]),axis=0)
    dev_pairs = np.concatenate((samples[int(0.5 * n):int(0.7 * n)], samples[n+int(0.5 * n):n+int(0.7 * n)]),axis=0)
    test_pairs = np.concatenate((samples[int(0.7 * n):n], samples[n + int(0.7 * n):2*n]),axis=0)

    my_write(entity_name,train_pairs,a_toks_train,a_parents_train,b_toks_train,b_parents_train,f_sim_train)
    my_write(entity_name, dev_pairs, a_toks_dev, a_parents_dev, b_toks_dev, b_parents_dev, f_sim_dev)
    my_write(entity_name, test_pairs, a_toks_test, a_parents_test, b_toks_test, b_parents_test, f_sim_test)

a_parents_train = open("train\\parents.a","w",encoding="utf8")
b_parents_train = open("train\\parents.b","w",encoding="utf8")
a_toks_train = open("train\\toks.a","w",encoding="utf8")
b_toks_train = open("train\\toks.b","w",encoding="utf8")
f_sim_train = open("train\\sims","w",encoding="utf8")

a_parents_dev = open("dev\\parents.a","w",encoding="utf8")
b_parents_dev = open("dev\\parents.b","w",encoding="utf8")
a_toks_dev = open("dev\\toks.a","w",encoding="utf8")
b_toks_dev = open("dev\\toks.b","w",encoding="utf8")
f_sim_dev = open("dev\\sims","w",encoding="utf8")

a_parents_test = open("test\\parents.a","w",encoding="utf8")
b_parents_test = open("test\\parents.b","w",encoding="utf8")
a_toks_test = open("test\\toks.a","w",encoding="utf8")
b_toks_test = open("test\\toks.b","w",encoding="utf8")
f_sim_test = open("test\\sims","w",encoding="utf8")
