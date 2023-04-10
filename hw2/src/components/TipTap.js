import React, { useMemo, useState } from 'react';
import { createEditor } from 'slate';
import { Slate, Editable, withReact } from 'slate-react';
import { useSession, signOut } from 'next-auth/react'
import { useRouter } from "next/router";

const API_ENDPOINT = "https://backend-zk8d.api.codehooks.io/dev/users"
const API_KEY = "6ac3cba4-a25e-4341-91cc-0f809af8bc44"

const TextEditor = () => {
    const editor = useMemo(() => withReact(createEditor()), []);
    
    const [todos, setTodos] = useState([]);
    const {data: session, status} = useSession()
    const router = useRouter()

    useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(API_ENDPOINT, {
        'method':'GET',
        'headers': {'x-apikey': API_KEY}
      });
      const data = await response.json();
      setTodos(data);
    };

    fetchData();
  }, []);
  
    const renderElement = useCallback(({ element, attributes, children }) => {
      switch (element.type) {
        case 'list-item':
          return <li {...attributes}>{children}</li>;
        default:
          return <p {...attributes}>{children}</p>;
      }
    }, []);
  
    return (
        <Slate editor={editor} value={todos} onChange={value => setValue(value)}>
          <Editable renderElement={renderElement} />
        </Slate>
      );
  };

  export default TextEditor;