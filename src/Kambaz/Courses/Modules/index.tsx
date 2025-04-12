import ModulesControls from "./ModulesControls";
import { BsGripVertical } from "react-icons/bs";
import { useParams } from "react-router-dom";
import LessonControlButtons from "./LessonControlButtons";
import ModuleControlButtons from "./ModuleControlButtons";
import  { useEffect, useState } from "react";
import { setModules, addModule, editModule, updateModule, deleteModule }
  from "./reducer";
import * as modulesClient from "./client";
import * as courseClient from "../client";
import { useSelector, useDispatch } from "react-redux";
export default function Modules() {
  const { cid } = useParams();
  const { modules } = useSelector((state: any) => state.modulesReducer);
  const dispatch = useDispatch();

  const deleteModuleHandler = async (moduleId: string) => {
    await modulesClient.deleteModule(moduleId);
    dispatch(deleteModule(moduleId));
  };
 

  const updateModuleHandler = async (module: any) => {
    await modulesClient.updateModule(module);
    dispatch(updateModule(module));
  };
 
  const [moduleName, setModuleName] = useState("");
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const isFaculty = currentUser.role === 'FACULTY'
  const fetchModulesForCourse = async () => {
    const modules = await courseClient.findModulesForCourse(cid!);
    dispatch(setModules(modules));
  };
  useEffect(() => {
    fetchModulesForCourse();
  }, [cid]);
 
  const addModuleHandler = async () => {
    const newModule = await courseClient.createModuleForCourse(cid!, {
      name: moduleName,
      course: cid,
    });
    dispatch(addModule(newModule));
    setModuleName("");
  };
 

  return (
    <>
       {( isFaculty && <ModulesControls moduleName={moduleName} setModuleName={setModuleName}
        addModule={addModuleHandler} />)}
        <br />
        <br />
        <br />
        <br />
      <ul id="wd-modules" className="list-group rounded-0">
        {modules
          .map((module: any) => (
          <li className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
            <div className="wd-title p-3 ps-2 bg-secondary">
              <BsGripVertical className="me-2 fs-3" />
              {!module.editing && module.name}
      { module.editing && (
        <input className="form-control w-50 d-inline-block"
        onChange={(e) =>
            updateModuleHandler({ ...module, name: e.target.value })
        
        }
               onKeyDown={(e) => {
                 if (e.key === "Enter") {
                  updateModuleHandler({ ...module, editing: false });
                 }
               }}
               defaultValue={module.name}/>
      )} 

              {isFaculty && (<ModuleControlButtons moduleId={module._id}
                  deleteModule={(moduleId) => deleteModuleHandler(moduleId)}
                  editModule={(moduleId) => dispatch(editModule(moduleId))} />)}

            </div>
            {module.lessons && (
              <ul className="wd-lessons list-group rounded-0">
                {module.lessons.map((lesson: any) => (
                  <li className="wd-lesson list-group-item p-3 ps-1">
                    <BsGripVertical className="me-2 fs-3" /> {lesson.name} <LessonControlButtons />
                  </li>
                ))}</ul>)}</li>))}</ul>
    </>
  );
}
