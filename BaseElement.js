import { LitElement, html } from '@polymer/lit-element';
import { DefaultValue } from '@anoblet/defaultvalue';
import { RenderTemplate } from '@anoblet/rendertemplate';

export class BaseElement extends RenderTemplate(DefaultValue(LitElement)) {
}