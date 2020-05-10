"""convert hostperm.1 to permissions.sqlite"""

import os
import sqlite3

INPUT_FILE = 'hostperm.1'
OUTPUT_FILE = 'profile/permissions.sqlite'

def main():
    """main"""
    write_sqlite(OUTPUT_FILE, get_script(INPUT_FILE))

def get_script(name):
    """get script"""
    cmds = []
    cmds.append('pragma user_version = 8;')
    cmds.append('pragma page_size = 32768;')
    cmds.append('create table moz_perms ('+
                'id integer primary key, origin text, type text, permission integer, '+
                'expireType integer, expireTime integer, modificationTime integer);')

    cmd = "insert into moz_perms values ({id}, '{url}', '{selector}', {policy}, 0, 0, 0);"
    i = 0
    with open(name, 'rt', encoding='utf-8') as ifile:
        for line, text in enumerate(ifile):
            text = text.rstrip('\n')
            if not text or text.startswith('#'):
                continue

            row = text.split('\t')
            if len(row) != 4 or row[0] != 'host':
                raise Exception('can not parse at line {0}'.format(line+1))

            selector = row[1]
            policy = row[2]
            domain = row[3]
            cmds.append(cmd.format(id=i, url='http://'+domain, selector=selector, policy=policy))
            i += 1
            cmds.append(cmd.format(id=i, url='https://'+domain, selector=selector, policy=policy))
            i += 1

    cmds.append('reindex;')
    cmds.append('vacuum;')
    return '\n'.join(cmds)

def write_sqlite(name, script):
    """write sqlite"""
    try:
        os.makedirs(os.path.dirname(name))
    except OSError:
        pass

    try:
        os.remove(name)
    except OSError:
        pass

    with sqlite3.connect(name) as conn:
        conn.executescript(script)

if __name__ == '__main__':
    main()
