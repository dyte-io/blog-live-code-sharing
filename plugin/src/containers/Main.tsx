import { useDytePlugin } from '../context'
import CodeEditor from './CodeEditor';

const Main = () => {
  const plugin = useDytePlugin();

  return (
    <div style={{ height: "100%" }}>
        <CodeEditor plugin={plugin} />
    </div>
  )
}

export default Main
