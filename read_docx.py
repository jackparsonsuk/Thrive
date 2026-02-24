import zipfile
import xml.etree.ElementTree as ET
import sys
import re

def extract_text(docx_path):
    try:
        with zipfile.ZipFile(docx_path) as docx:
            xml_content = docx.read('word/document.xml')
        
        # Strip namespaces to simplify searching
        xml_str = xml_content.decode('utf-8')
        xml_str = re.sub(r'xmlns[^>]+', '', xml_str)
        # Parse tree without namespaces
        tree = ET.fromstring(xml_str)
        
        text = []
        for node in tree.iter():
            if node.tag.endswith('}t') or node.tag == 't':
                if node.text:
                    text.append(node.text)
        return '\n'.join(text)
    except Exception as e:
        return f"Error: {e}"

if __name__ == '__main__':
    print(extract_text(sys.argv[1]))
