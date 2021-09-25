import React, { useState, useEffect} from 'react';
import ReactFlow, {
  Handle,
  MiniMap,
  Controls,
  Background,
  getIncomers,
  isNode,
  ControlButton
} from 'react-flow-renderer'

export default (  ) =>{


const elem = 50
const x_pos = num => 50 +(num * 275)
const position = (num)=> num*(elem+15)
const tipo = 'smoothstep'

const lineStyle = {
    stroke: '#555', 
    strokeWidth: 2.25,
    shapeRendering: 'geometricPrecision',
  }

const handles ={
  borderRadius: 100,
  backgroundColor: 'transparent',
  border: 'none'
}

const Especial_styles = (props) => {
  return({
    display: 'flex',
    overflow: 'hidden',
    borderRadius: '5px', 
    boxShadow: `0 0 0 2px ${props}`, 
    height: '3em', 
    width: '12em', 
  })
}


const Basico = ({ data }) => {

  let[menu, setMenu] = useState(false)

  const changer = () => {
    setMenu(!menu)
  }

  return (
        <div>
        <Handle type="target" position="left" style= {handles} />
        <div className= {data.box ? 'path_box' : 'box'}>
          <button className= {menu? 'menu_box': 'ocultar'}>
            <b style = {{color: 'rgb(90, 90, 90)'}}>HD:</b> {data.hd} {'\u00A0'}  
            <b style = {{color: 'rgb(90, 90, 90)'}}>PE:</b> {data.pe}  {'\u00A0'}
            <b style = {{color: 'rgb(90, 90, 90)'}}>TA:</b> {data.ta}
            </button>
          <button className= {data.inner ? 'path_nombre' : 'Basico_nombre'}>{data.text}</button>
          <button className = "Creditos" onClick={changer}>{data.credits}</button>
        </div>
        <Handle style = {handles} type= "source" position="right"/>
    </div>
  );
}

const Profesional = ({ data }) => {
  
  let[menu, setMenu] = useState(false)

  const changer = () => {
    setMenu(!menu)
  }
  
  return (
    <div>
        <Handle type="target" position="left" style= {handles} />
        <div className = {data.box ? 'path_box' : 'Profesional_box'}>
        <button className= {menu? 'menu_box': 'ocultar'}>
            <b style = {{color: 'rgb(90, 90, 90)'}}>HD:</b> {data.hd} {'\u00A0'}  
            <b style = {{color: 'rgb(90, 90, 90)'}}>PE:</b> {data.pe}  {'\u00A0'}
            <b style = {{color: 'rgb(90, 90, 90)'}}>TA:</b> {data.ta}
            </button>
          <button className = {data.inner ? 'path_nombre' : 'Profesional_nombre'}>{data.text}</button>
          <button className = "Creditos" onClick={changer}>{data.credits}</button>
        </div>
        <Handle type= "source" position="right" style= {handles} />
    </div>
  );
};


const Especial = ({ data }) => {
  return (
    <div>
        <div style={Especial_styles(data.color)}>
          <button className= 'Especial_nombre'>{data.text}</button>
        </div>
    </div>
  );
};

const Titulacion = ({ data }) => {

  let[menu, setMenu] = useState(false)

  const changer = () => {
    setMenu(!menu)
  } 

  return (
    <div>
        <Handle type="target" position="left" style= {handles} />
        <div className = {data.box ? 'path_box' : 'Titulacion_box'}>
            <button className= {menu? 'menu_box': 'ocultar'}>
              <b style = {{color: 'rgb(90, 90, 90)'}}>HD:</b> {data.hd} {'\u00A0'}  
              <b style = {{color: 'rgb(90, 90, 90)'}}>PE:</b> {data.pe}  {'\u00A0'}
              <b style = {{color: 'rgb(90, 90, 90)'}}>TA:</b> {data.ta}
            </button>
          <button className = {data.inner ? 'path_nombre' : 'Titulacion_nombre'}>{data.text}</button>
          <button className = "Creditos" onClick={changer}>{data.credits}</button>
        </div>
        <Handle type= "source" position="right" style= {handles} />
    </div>
  );
};


const Header = ({ data }) => { 
  return (
    <div>
        <div className= 'Header_box'>
          <button className= 'Header_nombre'>{data.text}</button>
        </div>
    </div>
  );
};





const elements = [

  //headers

{id: '1', type: 'header', position: { x: x_pos(0), y: x_pos(-0.2)}, data: { text: 'Primer Semestre'}},
{id: '2', type: 'header', position: { x: x_pos(1), y: x_pos(-0.2)}, data: { text: 'Segundo Semestre'}},
{id: '3', type: 'header', position: { x: x_pos(2), y: x_pos(-0.2)}, data: { text: 'Tercer Semestre'}},
{id: '4',type: 'header',position: { x: x_pos(3), y: x_pos(-0.2)},data: { text: 'Cuarto Semestre'}},
{id: '5',type: 'header',position: { x: x_pos(4), y: x_pos(-0.2)},data: { text: 'Quinto Semestre'}},
{id: '6',type: 'header',position: { x: x_pos(5), y: x_pos(-0.2)},data: { text: 'Sexto Semestre'}},
{id: '7',type: 'header',position: { x: x_pos(6), y: x_pos(-0.2)},data: { text: 'Séptimo Semestre'}},
{id: '8',type: 'header',position: { x: x_pos(7), y: x_pos(-0.2)},data: { text: 'Octavo Semestre'}},
{id: '9',type: 'header',position: { x: x_pos(8), y: x_pos(-0.2)},data: { text: 'Noveno Semestre'}},

  // Primer nivel

{id: 'matematica', type: 'basico', position: { x: x_pos(0), y: x_pos(0)}, data: { text: 'Matemática Básica', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'introduccion', type: 'basico', position: { x: x_pos(0), y: position(4)}, data: { text: 'Intr. Economía', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'realidad', type: 'basico', position: { x: x_pos(0), y: position(5)}, data: { text: 'Realidad Nacional', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'epistemologia',type: 'basico',position: { x: x_pos(0), y: position(6) },data: { text: 'Epistemología', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'lenguaje',type: 'basico',position: { x: x_pos(0), y: position(8) },data: { text: 'Lenguaje y Comunicación', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'contabilidad',type: 'basico',position: { x: x_pos(0), y: position(9) },data: { text: 'Contabilidad General', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},

// Segundo Nivel

{id: 'algebra', type: 'basico', position: { x: x_pos(1), y: x_pos(0) }, data: { text: 'Álgebra Lineal', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'microeconomia', type: 'basico', position: { x: x_pos(1), y: position(3) }, data: { text: 'Microeconomía I', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'macroeconomia', type: 'basico', position: { x: x_pos(1), y: position(4) }, data: { text: 'Macroeconomía I', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'pensamiento', type: 'basico', position: { x: x_pos(1), y: position(5)}, data: { text: 'Pensamiento Económico', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'metodologia', type: 'basico', position: { x: x_pos(1), y: position(6)}, data: { text: 'Metodología I', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'costos', type: 'basico', position: { x: x_pos(1), y: position(9)}, data: { text: 'Sistemas de Costeo', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},

// Tercer Nivel

{id: 'diferencial', type: 'basico', position: { x: x_pos(2), y: x_pos(0)}, data: { text: 'Cálculo I', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'estad_bas', type: 'basico', position: { x: x_pos(2), y: position(2)}, data: { text: 'Estadística I', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'micro', type: 'basico', position: { x: x_pos(2), y: position(3)}, data: { text: 'Microeconomía II', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'macro', type: 'basico', position: { x: x_pos(2), y: position(4)}, data: { text: 'Macroeconomía II', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'tics', type: 'basico', position: { x: x_pos(2), y: position(8)}, data: { text: 'NTICS', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'financiera', type: 'basico', position: { x: x_pos(2), y: position(9)}, data: { text: 'Contabilidad Financiera', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},

// Cuarto Nivel

{id: 'integral', type: 'profesional', position: { x: x_pos(3), y: x_pos(0)}, data: { text: 'Cálculo II', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'estadistica', type: 'profesional', position: { x: x_pos(3), y: position(2)}, data: { text: 'Estadística II', test: 'prueba', hd: 32, pe: 64, ta: 64, credits:10}},
{id: 'nacional', type: 'profesional', position: { x: x_pos(3), y: position(4)}, data: { text: 'Contabilidad Nacional', test: 'prueba', hd: 16, pe: 32, ta: 32, credits:5}},
{id: 'politica', type: 'profesional', position: { x: x_pos(3), y: position(5)}, data: { text: 'Economía Política', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'metodo', type: 'profesional', position: { x: x_pos(3), y: position(6)}, data: { text: 'Metodología II', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'vincu', type: 'especial', position: { x: x_pos(3), y: position(7)}, data: { text: 'Vinculación', color: 'rgb(169, 37, 221)'}},
{id: 'administracion', type: 'profesional', position: { x: x_pos(3), y: position(8)}, data: { text: 'Administración', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},

// Quinto Nivel

{id: 'mat_fin', type: 'profesional', position: { x: x_pos(4), y: x_pos(0)}, data: { text: 'Matemática Financiera', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'econometria', type: 'profesional', position: { x: x_pos(4), y: position(2)}, data: { text: 'Econometría I', test: 'prueba', hd: 32, pe: 64, ta: 64, credits:10}},
{id: 'economica', type: 'profesional', position: { x: x_pos(4), y: position(3)}, data: { text: 'Política Económica', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'vinculacion', type: 'especial', position: { x: x_pos(4), y: position(4)}, data: { text: 'Vinculación', color: 'rgb(169, 37, 221)'}},
{id: 'desarrollo', type: 'profesional', position: { x: x_pos(4), y: position(5)}, data: { text: 'Teoría del Desarrollo', test: 'prueba', hd: 32, pe: 64, ta: 64, credits:10}},
{id: 'financiero', type: 'profesional', position: { x: x_pos(4), y: position(6)}, data: { text: 'Mercado Financiero', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'analisis', type: 'profesional', position: { x: x_pos(4), y: position(9)}, data: { text: 'Análisis Financiero', test: 'prueba', hd: 16, pe: 32, ta: 32, credits:5}},

// Sexto Nivel

{id: 'practi', type: 'especial', position: { x: x_pos(5), y: x_pos(0)}, data: { text: 'Prácticas', color: 'rgb(169, 37, 221)'}},
{id: 'econo', type: 'profesional', position: { x: x_pos(5), y: position(2)}, data: { text: 'Econometría II', test: 'prueba', hd: 32, pe: 64, ta: 64, credits:10}},
{id: 'monetaria', type: 'profesional', position: { x: x_pos(5), y: position(3)}, data: { text: 'Política monetaria', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'finanzas', type: 'profesional', position: { x: x_pos(5), y: position(4)}, data: { text: 'Finanzas públicas', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'corporativas', type: 'profesional', position: { x: x_pos(5), y: position(7)}, data: { text: 'Finanzas corporativas', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'for_proy', type: 'profesional', position: { x: x_pos(5), y: position(8)}, data: { text: 'Formulación de proyectos', test: 'prueba', hd: 16, pe: 32, ta: 32, credits:5}},
{id: 'tributaria', type: 'profesional', position: { x: x_pos(5), y: position(9)}, data: { text: 'Administración Tributaria', test: 'prueba', hd: 16, pe: 32, ta: 32, credits:5}},

// Septimo Nivel

{id: 'practicas', type: 'especial', position: { x: x_pos(6), y: position(2)}, data: { text: 'Prácticas', color: 'rgb(55, 149, 192)'}},
{id: 'fiscal', type: 'titulacion', position: { x: x_pos(6), y: position(3)}, data: { text: 'Política Fiscal', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'comercio', type: 'titulacion', position: { x: x_pos(6), y: position(4)}, data: { text: 'Comercio Justo', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'local', type: 'titulacion', position: { x: x_pos(6), y: position(5)}, data: { text: 'Desarrollo local', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'social', type: 'titulacion', position: { x: x_pos(6), y: position(6)}, data: { text: 'Economía Social', test: 'prueba', hd: 32, pe: 64, ta: 64, credits:10}},
{id: 'eval_proy', type: 'titulacion', position: { x: x_pos(6), y: position(8)}, data: { text: 'Evaluación de proyectos', test: 'prueba', hd: 32, pe: 64, ta: 64, credits:10}},
{id: 'etica', type: 'titulacion', position: { x: x_pos(6), y: position(9)}, data: { text: 'Ética Profesional', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},

// Octavo Nivel

{id: 'legislacion', type: 'titulacion', position: { x: x_pos(7), y: x_pos(0)}, data: { text: 'Legislación económica', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'operativa', type: 'titulacion', position: { x: x_pos(7), y: position(2)}, data: { text: 'Investigación Operativa', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'internacional', type: 'titulacion', position: { x: x_pos(7), y: position(3)}, data: { text: 'Economía Internacional', test: 'prueba', hd: 32, pe: 64, ta: 64, credits:10}},
{id: 'planificacion', type: 'titulacion', position: { x: x_pos(7), y: position(4)}, data: { text: 'Planificacion Económica', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'grado_uno', type: 'titulacion', position: { x: x_pos(7), y: position(7)}, data: { text: 'Trabajo de grado I', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'emprendimiento', type: 'titulacion', position: { x: x_pos(7), y: position(8)}, data: { text: 'Emprendimiento', test: 'prueba', hd: 16, pe: 32, ta: 32, credits:5}},

// Noveno Nivel

{id: 'ambiental', type: 'titulacion', position: { x: x_pos(8), y: x_pos(0)}, data: { text: 'Economía Ambiental', test: 'prueba', hd: 16, pe: 32, ta: 32, credits:5}},
{id: 'bio', type: 'titulacion', position: { x: x_pos(8), y: position(2)}, data: { text: 'Bioeconomía', test: 'prueba', hd: 16, pe: 32, ta: 32, credits:5}},
{id: 'conocimiento', type: 'titulacion', position: { x: x_pos(8), y: position(3)}, data: { text: 'Economía del conocimiento', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'inno', type: 'titulacion', position: { x: x_pos(8), y: position(4)}, data: { text: 'Economía de la Innovación', test: 'prueba', hd: 32, pe: 0, ta: 128, credits:10}},
{id: 'respo', type: 'titulacion', position: { x: x_pos(8), y: position(6)}, data: { text: 'Responsabilidad Social', test: 'prueba', hd: 16, pe: 0, ta: 64, credits:5}},
{id: 'grado_dos', type: 'titulacion', position: { x: x_pos(8), y: position(7)}, data: { text: 'Trabajo de grado II', test: 'prueba', hd: 48, pe: 0, ta: 192, credits: 15}},

]

const conecciones = (objeto) =>{
  objeto.forEach((e, i) =>{
      elements.push({
          id: `Conect-${i}`, 
          source: e[0], 
          target: e[1],
          style: lineStyle, 
          type: 'smoothstep', 
          arrowHeadType: 'arrow', 
          arrowHeadColor: '#bbb',
          animated: e[2] === true ? true: false
      })
  })
}

conecciones([

  //  Primera columna 
  ['matematica', 'algebra'],  ['matematica', 'microeconomia'], ['introduccion', 'microeconomia'],
  ['introduccion', 'macroeconomia'],  ['introduccion', 'pensamiento'], ['epistemologia', 'metodologia'],
  ['contabilidad', 'costos'],  
  
  //Segunda columna
  ['algebra', 'diferencial'], ['algebra', 'estad_bas'], ['microeconomia', 'micro'],
  ['macroeconomia', 'macro'],  ['costos', 'financiera'], ['pensamiento', 'politica'],
  ['metodologia', 'metodo'], ['algebra', 'mat_fin', true],
  
  //Tercera columna
  ['diferencial', 'integral'], ['estad_bas', 'estadistica'],  ['macro', 'nacional'], 
  ['micro', 'economica'], ['financiera', 'analisis'], 

  //Cuarta columna
  ['integral', 'econometria'],  ['estadistica', 'econometria'], 
  ['nacional', 'econometria'], ['nacional', 'economica'],

  //Quinta columna
  ['mat_fin', 'for_proy', true], ['econometria', 'econo'],  ['economica', 'monetaria'], 
  ['economica', 'finanzas'], ['financiero', 'corporativas'], ['analisis', 'for_proy'],

  //Sexta columna
  ['finanzas', 'fiscal'],  ['econo', 'fiscal'],
  ['desarrollo', 'local'], ['desarrollo', 'comercio', true], ['desarrollo', 'social', true],
  ['for_proy', 'eval_proy'],

   //Séptima columna
   ['fiscal', 'legislacion'], ['fiscal', 'operativa'],  ['fiscal', 'internacional'],
   ['local', 'planificacion'],  ['fiscal', 'planificacion'], ['eval_proy', 'grado_uno'],
   ['eval_proy', 'emprendimiento'], ['fiscal', 'grado_uno', true],

      //Octava columna
      ['etica', 'innovacion',true], ['legislacion', 'ambiental'],  ['legislacion', 'bio'],
      ['internacional', 'conocimiento'],  ['planificacion', 'inno'], ['grado_uno', 'grado_dos'],
      ['emprendimiento', 'grado_dos'], ['etica', 'respo', true], ['social', 'respo']
])


const[Elements, setElement] = useState(elements)
const[showPath, setPath] = useState(false)

const [activar, SetActivar] = useState({
  background: '#ffff',
})


const nodeTypes = {
  basico: Basico,
  profesional: Profesional,
  titulacion: Titulacion,
  header: Header,
  especial: Especial
};


const getAllincomers = (node, elements) => {
  return (getIncomers(node, elements).reduce((memo, incomer) => 
  [...memo, incomer, ...getAllincomers(incomer, elements)], []
  ))
}

const Path = (node, elements) => {
  const outin = getAllincomers(node, elements)
  const avoid = ['1', '2', '3', '4', '5', '6', '7', '8', '9', node?.id]
  const allow = ['basico', 'profesional', 'titulacion', 'especial']
  const others = elements.filter((e)=> !(outin.includes(e) | avoid.includes(e?.id) | !isNode(e) | !allow.includes(e?.type)))

  others.forEach(e =>{
    e.data = {
        ...e.data,
      box: true,
      inner: true,
      color: '#dadada',
      }
    })
  setElement(elements.filter(e => !(e in others)).concat(others))
  }

  return (
    <div className="Graph">
      <ReactFlow 
      nodesConnectable={false}
      elements={Elements}
      nodeTypes={nodeTypes} 
      elementsSelectable
      onSelectionChange={(element) =>{
        const node = element?.[0]
        if(showPath){
        node ? console.log(Path(node, elements)): console.log('none')
      }
      }}
      arrowHeadColor = {'#555'}
      onLoad={(instance) => setTimeout(() => instance.fitView(), 0)}
      >
        <MiniMap
      nodeStrokeColor={(n) => {
        if (n.style?.background) return n.style.background;
        if (n.type === 'basico') return '#FF9800';
        if (n.type === 'profesional') return 'rgb(169, 37, 221)';
        if (n.type === 'titulacion') return 'rgb(55, 149, 192)';

        return '#eee';
      }}
      nodeColor={(n) => {
        if (n.style?.background) return n.style.background;

        return '#fff';
      }}
      nodeBorderRadius={2}
      nodeStrokeWidth={3}
    />
    <Controls
    showInteractive = {false}>
      <ControlButton style = {activar} onClick={() => {
        setPath(!showPath)
        if (showPath){
          SetActivar({
            ...activar,
          background: '#fff',
          color: '#000'} 
          )}
        else{
          SetActivar({
            ...activar,
            background: '#ff2222',
            color: '#fff'
          })}
      }
        }>
      •
      </ControlButton >
    </Controls>
    <Background color="#aaa" gap={16} />
    </ReactFlow>
    </div>
  );
};